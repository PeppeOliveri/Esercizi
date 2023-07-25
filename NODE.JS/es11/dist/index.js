"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const planets_1 = require("./controllers/planets");
const users_js_1 = require("./controllers/users.js");
const multer_1 = __importDefault(require("multer"));
const authorize_1 = __importDefault(require("./authorize"));
require("./passport.js");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage });
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/api/planets", planets_1.getAll);
app.get("/api/planets/:id", planets_1.getOneById);
app.post("/api/planets", planets_1.create);
app.put("/api/planets/:id", planets_1.updateById);
app.delete("/api/planets/:id", planets_1.deleteById);
app.post("/api/planets/:id/image", upload.single("image"), planets_1.createImage);
app.post("/api/users/login", users_js_1.login);
app.post("/api/users/signup", users_js_1.signup);
app.get("/api/users/logout", authorize_1.default, users_js_1.logout);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
