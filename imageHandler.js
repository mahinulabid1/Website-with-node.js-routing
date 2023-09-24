const fs = require("fs");
  
const ImageCollection = {
    figmaicon: fs.readFileSync(`${__dirname}/src/images/figmaicon.png`, null),
    findMeUpwork: fs.readFileSync(`${__dirname}/src/images/findMeUpwork.png`, null),
    footerBG: fs.readFileSync(`${__dirname}/src/images/footerBG.png`, null),
    html5: fs.readFileSync(`${__dirname}/src/images/html5.png`, null),
    javascripticon: fs.readFileSync(`${__dirname}/src/images/javascripticon.png`, null),
    logo: fs.readFileSync(`${__dirname}/src/images/logo.png`, null),
    pc: fs.readFileSync(`${__dirname}/src/images/pc.png`, null),
    phpicon: fs.readFileSync(`${__dirname}/src/images/phpicon.png`, null),
    sassicon: fs.readFileSync(`${__dirname}/src/images/sassicon.png`, null),
    working: fs.readFileSync(`${__dirname}/src/images/working.png`, null),
    xdicon: fs.readFileSync(`${__dirname}/src/images/xdicon.png`, null),
    wovenPreview1: fs.readFileSync(`${__dirname}/src/images/wovenPreview1.png`, null),

    calculatorPreview: fs.readFileSync(`${__dirname}/src/images/calculatorPreview.png`, null),
    close: fs.readFileSync(`${__dirname}/src/images/close.png`, null),
    debukstudio: fs.readFileSync(`${__dirname}/src/images/debukstudio.png`, null),
    github: fs.readFileSync(`${__dirname}/src/images/github.png`, null),
    instaPreview: fs.readFileSync(`${__dirname}/src/images/instaPreview.png`, null),
    js: fs.readFileSync(`${__dirname}/src/images/js.png`, null),
    php: fs.readFileSync(`${__dirname}/src/images/php.png`, null),
    profilepic2: fs.readFileSync(`${__dirname}/src/images/profilepic2.png`, null),
    webchview: fs.readFileSync(`${__dirname}/src/images/webchview.png`, null),
    Workvideo: fs.readFileSync(`${__dirname}/src/images/Workvideo.webm`, null),
    xd: fs.readFileSync(`${__dirname}/src/images/xd.png`, null),
    
}


// This has all the image with this route
const ImageRoute = (req, res) => {
    if (req.url === "/figmaicon.png") {
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.figmaicon); 
    }

    else if(req.url === "/findMeUpwork.png"){
        res.writeHead(200, {"Content-Type":"image/jpg"});
        res.write(ImageCollection.findMeUpwork);
    }

    else if(req.url === "/footerBG.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.footerBG);
    }

    else if(req.url === "/html5.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.html5);
    }

    else if(req.url === "/javascripticon.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.javascripticon);
    }

    else if(req.url === "/logo.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.logo);
    }

    
    else if(req.url === "/pc.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.pc);
    }

    else if(req.url === "/phpicon.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.phpicon);
    }

    else if(req.url === "/sassicon.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.sassicon);
    }

    else if(req.url === "/working.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.working);
    }

    else if(req.url === "/xdicon.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.xdicon);  
    }

    else if(req.url === "/wovenPreview1.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.wovenPreview1); 
    }

    else if(req.url === "/calculatorPreview.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.calculatorPreview); 
    }

    else if(req.url === "/close.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.close); 
    }

    else if(req.url === "/debukstudio.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.debukstudio); 
    }

    else if(req.url === "/github.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.github); 
    }

    else if(req.url === "/js.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.js); 
    }

    else if(req.url === "/php.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.php); 
    }

    else if(req.url === "/profilepic2.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.profilepic2); 
    }

    else if(req.url === "/webchview.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.webchview); 
    }

    else if(req.url === "/Workvideo.webm"){
        res.writeHead(200, {"Content-Type":"video/webm"});
        res.write(ImageCollection.Workvideo); 
    }

    else if(req.url === "/xd.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.xd); 
    }

    
    else if(req.url === "/instaPreview.png"){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(ImageCollection.instaPreview); 
    }
    
}


module.exports = ImageRoute;