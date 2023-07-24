"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const planets_1 = require("./controllers/planets");
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/api/planets", planets_1.getAll);
app.get("/api/planets/:id", planets_1.getOneById);
app.post("/api/planets", planets_1.create);
app.put("/api/planets/:id", planets_1.updateById);
app.delete("/api/planets/:id", planets_1.deleteById);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
