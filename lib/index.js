"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = exports.Script = void 0;
const baybayin_1 = __importDefault(require("./scripts/baybayin"));
const buhid_1 = __importDefault(require("./scripts/buhid"));
const hanunoo_1 = __importDefault(require("./scripts/hanunoo"));
const tagbanwa_1 = __importDefault(require("./scripts/tagbanwa"));
var Script;
(function (Script) {
    Script["BAYBAYIN"] = "baybayin";
    Script["HANUNOO"] = "hanunoo";
    Script["BUHID"] = "buhid";
    Script["TAGBANWA"] = "tagbanwa";
})(Script = exports.Script || (exports.Script = {}));
const scriptConverters = {
    [Script.BAYBAYIN]: baybayin_1.default,
    [Script.HANUNOO]: hanunoo_1.default,
    [Script.BUHID]: buhid_1.default,
    [Script.TAGBANWA]: tagbanwa_1.default,
};
/**
 * Translate a given text into a desired script.
 *
 * @param text string
 * @param script Script
 * @returns string
 */
const translate = (text, script = Script.BAYBAYIN) => {
    const scriptConverter = scriptConverters[script] || baybayin_1.default;
    return scriptConverter(text);
};
exports.translate = translate;
