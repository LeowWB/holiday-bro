const DELIM_ROW = "\n \n \n \n\n";
const DELIM_HEADER = "\t";
const DELIM_FIELD = "\n";
const NUS_MOD_HEADER = "NUS Module 1";
const UNI_HEADER = "Partner University";

let rawTa = document.getElementById("raw");
let modTa = document.getElementById("mod");

function parseRaw () {
	//first things first get raw data
	let raw = rawTa.value;
	let colHeaders = (raw.split("\n", 1)[0]).split(DELIM_HEADER);

	//figure out which columns contain the important info we want (from first textarea)
	const uniIndex = colHeaders.indexOf(UNI_HEADER);
	const nModIndex = colHeaders.indexOf(NUS_MOD_HEADER);

	//parse the second textarea
	let mod = modTa.value;
	let mods = mod.split("\n");

	let rowData = raw.split(DELIM_ROW);
	let uniCol = [];
	let modCol = [];

	let curRow;
	let crUni;
	let crNMod;

	let schDict = {};

	for (let i = 0; i < rowData.length; i++) {

		curRow = rowData[i].split(DELIM_FIELD);

		if (i === 0) //to account for the first row of content also containing all the column headers
			curRow.shift();

		crUni = curRow[uniIndex];
		crNMod = curRow[nModIndex];

		for (const mod of mods) {

			if (mod === crNMod) {

				if (schDict[crUni] === undefined) {
					schDict[crUni] = new Set();
				}

				schDict[crUni].add(crNMod);
			}
		}
	}

	let outputTa = document.getElementById("output");
	let outStr = "";

	for (const [uni, unsortedModules] of Object.entries(schDict)) {
		const sortedModules = Array.from(unsortedModules).sort();
		outStr += [uni, ...sortedModules].join("\n\t");
		outStr += "\n\n\n";
	}

	outputTa.value = outStr;

	//scroll down
	window.scrollBy(0, 1000);
}

document.getElementById("ok").addEventListener("click", parseRaw);
document.getElementById("help").addEventListener("click", () => window.location.href = "help.html");