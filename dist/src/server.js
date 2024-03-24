"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const secrets_1 = require("./secrets");
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const seedScript_1 = require("../prisma/seedScript");
const fs_1 = require("fs");
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));
app.use('/', routes_1.default);
const seedFlagFile = '.seeded';
if (!(0, fs_1.existsSync)(seedFlagFile)) {
    (0, seedScript_1.seedScript)();
    (0, fs_1.writeFileSync)(seedFlagFile, '');
}
app.listen(secrets_1.PORT, () => { });
