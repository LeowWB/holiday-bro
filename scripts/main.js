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

//implementation of ordered list of strings with no duplicates
class ModList {

	constructor () {
		
		this.xs = [];
	}

	//does a binary search of the array to see if the element already exists.
	//if it doesn't then adds the element to the appropriate position.
	add(m) {

		let thisXs = this.xs;

		function helper(low, high) {

			let mid = Math.floor((low + high) / 2);

			if (thisXs[mid] === m)	{	//a copy of m has already been found in the array
				return;
			}
			else if (low === high) {	//m is confirmed to not exist in the array

				if (thisXs[low] < m)
					low++;
				
				thisXs.splice(low, 0, m);
			}
			else if (low === mid) 
				helper(high, high);
			else if (thisXs[mid] > m)
				helper(low, mid);
			else
				helper(mid, high);
		}

		helper(0, thisXs.length);
	}

	toString() {

		let rv = "";

		this.xs.forEach(element => {
			rv += element + "\n";
		});

		return rv;
	}
}