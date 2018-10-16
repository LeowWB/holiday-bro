const DELIM_ROW = "\n \n \n \n";
const DELIM_HEADER = "\t";
const DELIM_FIELD = "\n";
const NUS_MOD_HEADER = "NUS Module 1";
const UNI_HEADER = "Partner University";

let rawTa = document.getElementById("raw");
let modTa = document.getElementById("mod");


function parseRaw() {
	//first things first get raw data
	let raw = rawTa.value;
	let colHeaders = (raw.split("\n", 1)[0]).split(DELIM_HEADER);

	//figure out which columns contain the important info we want (from first textarea)
	for (let i = 0; i < colHeaders.length; i++) {
		if (colHeaders[i] === UNI_HEADER) {
			var uniIndex = i;
		}
		else if (colHeaders[i] === NUS_MOD_HEADER) {
			var nModIndex = i;
		}
	}

	//parse the second textarea
	let mod = modTa.value;
	let mods = mod.split("\n")；

	let rowData = raw.split(DELIM_ROW);
	let uniCol = new Array(rowData.length);
	let modCol = new Array(rowData.length);

	let curRow;
	let crUni;
	let crNMod;

	let schDict = {};

	for (let i = 0; i < rowData.length; i++) {
		curRow = rowData[i].split(DELIM_FIELD);

		crUni = curRow[uniIndex];
		crNMod = curRow[nModIndex];

		for (let j = 0; j < mods.length; j++) {
			
			if (mods[i] === crNMod) {
				//using dictionary
				//each v in dict should be array to show list of mods that sch has
				//sorry not array i mean ordered list
				//should implement on own
			}
		}


	}

	alert(uniIndex + " " + nModIndex);
}


document.getElementById("ok").addEventListener("click", parseRaw);