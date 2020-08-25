import Arweave from "arweave/web";

class ArweaveCrypto{

    public readonly driver: SubtleCrypto;
    public crypto: Crypto
    public config: any
    constructor(){

        this.driver = window.crypto.subtle;
        
        this.crypto = crypto;

        this.config = {
            keys: {
                subtle: {
                    name: 'RSA-PSS',
                    modulusLength: 4096,
                    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                    hash: {
                        name: 'SHA-256',
                    }
                }
            },
            digests: {
                hash: 'SHA-256'
            },
            signatures: {
                hash: 'SHA-256',
                subtle: {
                    name: 'RSA-PSS',
                    saltLength: 0,
                }
            }
        };


    }

    /**
     * Generate a new JWK private key.
     * 
     * @return {Promise<Object>}
     */
    async jwk(){

        let key = await this
            .driver
            .exportKey(
                'jwk', 
                (await this.key())
            );

        return {
            'kty': key.kty,
            'e'  : key.e,
            'n'  : key.n,
            'd'  : key.d,
            'p'  : key.p,
            'q'  : key.q,
            'dp' : key.dp,
            'dq' : key.dq,
            'qi' : key.qi,
        };
    }

    /**
     * Generate a hash digest of the given input data.
     * 
     * @param {ArrayBuffer} data - The string to hash
     * 
     * @return {Promise<string>} - Base64 URL encoded string will be returned
     */
    async hash(data: ArrayBuffer){
        let digest = await this
            .driver
            .digest(
                this.config.digests.hash,
                data
            );

        return digest;
    }

    /**
     * 
     * @param {Object} jwk - JWK object
     * @param {ArrayBuffer} buffer - ArrayBuffer of contents to sign
     * 
     * @return {Promise<ArrayBuffer>}
     */
    async sign(jwk: any, buffer: ArrayBuffer){
        return this
            .driver
            .sign(
                this.config.signatures.subtle,
                (await this.jwkToCryptoKey(jwk)),
                buffer
            );
    }

    /**
     * Generate a new CryptoKey private key using an Arweave
     * compliant configuration.
     * 
     * @return {Promise<CryptoKey>}
     */
    async key(){
        let cryptokey = await this
            .driver
            .generateKey(
                this.config.keys.subtle,
                true,
                ['sign']
            );
//@ts-ignore
        return cryptokey.privateKey;
    }

    /**
     * Convert a JWK object into a CryptoKey to use with subtle functions.
     * 
     * @param {Object} jwk - JWK object
     */
    async jwkToCryptoKey(jwk: any){
        return this.driver.importKey(
            'jwk',
            jwk,
            this.config.keys.subtle,
            false,
            ['sign']
        );
    }

    /**
     * 
     * @param {ArrayBuffer} dataBuffer - ArrayBuffer of data to encrypt
     * @param {ArrayBuffer} passphraseBuffer - ArrayBuffer to use as key to encrypt with
     * 
     * @return {Promise<ArrayBuffer>} - Encrypted data
     */
    async encrypt(dataBuffer: ArrayBuffer, passphraseBuffer: ArrayBuffer){

            let salt = Arweave.utils.b64UrlToBuffer('Memory hole.');

            let iterations = 100000;
            let hash = 'SHA-256';

            let iv = new Uint8Array(16);

            this.crypto.getRandomValues(iv);

            let rawKey = await this.driver.importKey(
                'raw',
                passphraseBuffer,
                {name: 'PBKDF2'},
                false,
                ['deriveKey']
            );

            let key = await this.driver.deriveKey(
                {
                    name: 'PBKDF2',
                    salt: salt,
                    iterations: iterations,
                    hash: hash
                },
                rawKey,
                {
                    name: 'AES-CBC',
                    length: 256
                },
                false,
                ['encrypt', 'decrypt']
            );

            let encryptedData = await this.driver.encrypt(
                {
                    name: 'AES-CBC',
                    iv: iv
                },
                key,
                dataBuffer
            );

            return Arweave.utils.concatBuffers([iv, encryptedData]);

    }

    /**
     * @param {ArrayBuffer} encryptedBuffer - ArrayBuffer of data to decrypt
     * @param {ArrayBuffer} passphraseBuffer - ArrayBuffer to use as key to decrypt with
     * 
     * @return {Promise<ArrayBuffer>} - Decrypted data
     */
    async decrypt(encryptedBuffer: ArrayBuffer, passphraseBuffer:ArrayBuffer){
        let salt = Arweave.utils.b64UrlToBuffer('Memory hole.');
        let iter = 100000;
        let hash = 'SHA-256';
        let iv = encryptedBuffer.slice(0, 16);
        let dataBuffer = encryptedBuffer.slice(16);

        let rawKey = await this.driver.importKey(
            'raw',
            passphraseBuffer,
            {name: 'PBKDF2'},
            false,
            ['deriveKey']
        );

        let key = await this.driver.deriveKey(
            {
                name: 'PBKDF2',
                salt: salt,
                iterations: iter,
                hash: hash
            },
            rawKey,
            {
                name: 'AES-CBC',
                length: 256
            },
            false,
            ['encrypt', 'decrypt']
        );

        let data = this.driver.decrypt(
            {
                name:
                'AES-CBC',
                iv: iv
            },
            key,
            dataBuffer
        );

        return data;
    }
}

export default ArweaveCrypto;