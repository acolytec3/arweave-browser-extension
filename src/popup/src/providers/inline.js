import axios from 'axios';
import arweave from 'arweave';

export default {

  async html(htmlString, url, features = { embed: true }) {

    let parser = new DOMParser();

    let document = parser.parseFromString(htmlString, 'text/html');


    let styleSheets = document.querySelectorAll('link[rel="stylesheet"],link[rel="preload"][as="style"]');
    let scripts = document.querySelectorAll('script,noscript');
    let images = document.querySelectorAll('img');
    let iframes = document.querySelectorAll('iframe');

    let rebase = document.createElement('base');

    rebase.setAttribute('href', url);

    document.head.appendChild(rebase);


    let promises = [];

    let replacements = {

    };

    let encodedImages = {

    };

    styleSheets.forEach(styleSheet => {

      let href = styleSheet.getAttribute('href');

      let absoluteURL = new URL(href, url);

      promises.push(new Promise((resolve) => {


        axios
          .create()
          .get(absoluteURL)
          .then(response => {

            replacements[href] = response.data;
            resolve(response.data);
          })
          .catch(err => {
            resolve();
          });
      }));
    });


    images.forEach(image => {

      if (features.embed == true) {
        image.removeAttribute('sizes');
        image.removeAttribute('srcset');
        image.removeAttribute('data-src');
      }

      let src = image.getAttribute('src');
      let absoluteURL = new URL(src, url);

      if (features.embed == false) {
        image.setAttribute('src', absoluteURL);
        return;
      }

      promises.push(new Promise((resolve) => {

        axios
          .create()
          .get(absoluteURL, {
            responseType: 'blob',
            timeout: 10000
          })
          .then(response => {


            var reader = new FileReader();
            reader.readAsDataURL(response.data);
            reader.onload = function () {

              encodedImages[src] = reader.result;

              resolve();
            }
          })
          .catch(err => {
            resolve();
          });
      }));
    });

    await Promise.all(promises);



    scripts.forEach(script => {
      script.remove();
    });

    iframes.forEach(iframe => {
      iframe.remove();
    });

    styleSheets.forEach(styleSheet => {

      let href = styleSheet.getAttribute('href');

      let styleTag = document.createElement('style');

      styleTag.textContent = replacements[href];

      styleSheet.replaceWith(styleTag);
    });

    if (features.embed == true) {

      images.forEach(image => {
        let src = image.getAttribute('src');

        let replace = encodedImages[src];

        if (typeof replace != 'string') {
          return;
        }

        image.setAttribute('src', replace);
      });
    }

    let html = this.documentToString(document);

    return {
      title: document.title,
      html: html,
      size: arweave.utils.b64UrlEncode(arweave.utils.bufferTob64(arweave.utils.stringToBuffer(html))).length
    };

  },
  documentToString(domDocument) {
    return domDocument.all[0].outerHTML;
  },
};
