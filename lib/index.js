import fs from "node:fs";
import process from "node:process";
import { fileURLToPath } from "node:url";
import BinWrapper from "bin-wrapper";

const pkg = JSON.parse(
	fs.readFileSync(new URL("../package.json", import.meta.url))
);
const mirror =
	process.env.ADVPNG_BINARY_SITE ||
	process.env.npm_config_advpng_binary_site ||
	"https://raw.github.com/imagemin/advpng-bin";
const url = `${mirror}/v${pkg.version}/vendor/`;

const binWrapper = new BinWrapper()
	.src(`${url}osx/advpng`, "darwin")
	.src(`${url}linux/advpng`, "linux")
	.src(`${url}win32/advpng.exe`, "win32")
	.dest(fileURLToPath(new URL("../vendor", import.meta.url)))
	.use(process.platform === "win32" ? "advpng.exe" : "advpng");

export default binWrapper;
