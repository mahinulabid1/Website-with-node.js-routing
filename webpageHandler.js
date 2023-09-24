const fs = require("fs");

const FileCollection = {
  homepage: fs.readFileSync(`${__dirname}/src/index.html`, "utf-8"),
  workpage: fs.readFileSync(`${__dirname}/src/work.html`, "utf-8"),
  style: fs.readFileSync(`${__dirname}/src/resources/scss/styles.css`, "utf-8"),
  workStyle: fs.readFileSync(`${__dirname}/src/resources/scss/work.css`, "utf-8"),
  fontawesome: fs.readFileSync(`${__dirname}/src/resources/scss/fontawesome.min.css`, "utf-8"),
  animate: fs.readFileSync(`${__dirname}/src/resources/scss/animate.min.css`, "utf-8"),


  // component file
  websiteHead: fs.readFileSync(`${__dirname}/src/components/websiteHead.html`, "utf-8"),
  navigation: fs.readFileSync(`${__dirname}/src/components/navigation.html`, "utf-8"),

}



//Function
let ReplaceComponent = (file, selectString, replaceString) => {
  let changedResult = file.replace(selectString, replaceString);
  return changedResult;
}


//Router Handler Middleware 
const WebPageRoute = (req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    let ElementToSend = ReplaceComponent(
      FileCollection.homepage,
      "<!-- %%websiteHead%% -->",
      FileCollection.websiteHead
    );

    ElementToSend = ReplaceComponent (
      ElementToSend,
      "<!--%%websitetitle%% -->",
      "AbidsTent - Home"
    );

    ElementToSend = ReplaceComponent (
      ElementToSend,
      "<!--%%mainStyleSheet%%-->",
      `<link rel="stylesheet" href="/styles.css">`
    );

    ElementToSend = ElementToSend.replace("<!-- %%navigation%% -->", FileCollection.navigation);

    res.write(ElementToSend);

  }

  else if (req.url === "/work.html") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    let ElementToSend = ReplaceComponent(
      FileCollection.workpage,
      "<!-- %%websiteHead%% -->",
      FileCollection.websiteHead
      // <!-- %%websiteHead%% -->
    );

    ElementToSend = ReplaceComponent (
      ElementToSend,
      "<!--%%websitetitle%% -->",
      "AbidsTent - Work"
    );

    ElementToSend = ReplaceComponent (
      ElementToSend,
      "<!--%%mainStyleSheet%%-->",
      `<link rel="stylesheet" href="/work.css">`
    );

    ElementToSend = ElementToSend.replace("<!-- %%navigation%% -->", FileCollection.navigation);

    res.write(ElementToSend);
  }

  else if (req.url === "/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });

    res.write(FileCollection.style);
  } 

  else if (req.url === "/work.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });

    res.write(FileCollection.workStyle);
  }

  else if (req.url === "/fontawesome.min.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });

    res.write(FileCollection.fontawesome);
  }

  else if (req.url === "/animate.min.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });

    res.write(FileCollection.animate);
  }
}


module.exports = WebPageRoute;