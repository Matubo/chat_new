export default function strHaveAnyMeaningfulSymbols(str: string) {
	if (str.match(/\S/i) != null) return true;
	else return false;
}
