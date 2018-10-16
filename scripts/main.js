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
	let mod = modTa.value;
	let colHeaders = (raw.split("\n", 1)[0]).split(DELIM_HEADER);

	//figure out which columns contain the important info we want
	for (let i = 0; i < colHeaders.length; i++) {
		if (colHeaders[i] === UNI_HEADER) {
			var uniIndex = i;
		}
		else if (colHeaders[i] === NUS_MOD_HEADER) {
			var nModIndex = i;
		}
	}

	let rowData = raw.split(DELIM_ROW);
	let uniCol = new Array(rowData.length);
	let modCol = new Array(rowData.length);

	let curRow;
	for (let i = 0; i < rowData.length; i++) {
		curRow = rowData[i].split(DELIM_FIELD);




	}

	alert(uniIndex + " " + nModIndex);
}


document.getElementById("ok").addEventListener("click", parseRaw);