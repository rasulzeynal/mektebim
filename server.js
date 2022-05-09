const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const userdb = JSON.parse(fs.readFileSync("./api/data.json","utf-8"));


server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789";
const expiresIn = "1h";

function createToken(payload) {
    return jwt.sign(payload,SECRET_KEY,{expiresIn});
}

function isAuthendicated({mail,sifre}) {
    return {
        userdb.data.findIndex(
            (user) => user.mail === mail && user.sifre === sifre
        ) !== -1
    }
}

server.post("/api/auth/register", (req, res) => {
    const { mail, sifre } = req.body;
    if (isRegisterAuthenticated({ mail })) {
      const status = 401;
      const message = "Bu mail artıq mövcuddur.";
      res.status(status).json({ status, message });
      return;
    }

    fs.readFile("./api/data.json", (err, data) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
        data = JSON.parse(data.toString());
    
        let last_item_id = data.users[data.users.length - 1].id;
    
        data.users.push({ id: last_item_id + 1, mail: mail, sifre: sifre });
        let writeData = fs.writeFile(
            "./api/data.json",
            JSON.stringify(data),
            (err, result) => {
              if (err) {
                const status = 401;
                const message = err;
                res.status(status).json({ status, message });
                return;
              }
            }
          );
        });
        const access_token = createToken({ email, password });
        res.status(200).json({ access_token });
      });
      
      server.post("/api/auth/login", (req, res) => {
        const { mail, sifre } = req.body;
        
        if (!isLoginAuthenticated({ mail, sifre })) {
          const status = 401;
          const message = "Incorrect Email or Password";
          res.status(status).json({ status, message });
          return;
        }
        const access_token = createToken({ mail, sifre });
        res.status(200).json({ access_token });
      });
      
      server.listen(5000, () => {
        console.log("Running fake api json server");
      });