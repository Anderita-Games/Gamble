#pragma strict
var Pot : UnityEngine.UI.InputField;
var Total : UnityEngine.UI.Text;
var Addition;
function Start () {
	//vars
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape)) {
		Application.LoadLevel("MainMenu");
	}
}

function Left () {
	var VPot = int.Parse(Pot.text);
	var VTotal = int.Parse(Total.text);
	var number = Random.Range(0,2);
	Debug.Log ("Number" + number);
	if (VPot <= VTotal && number == 1) {
		//Correct!!!
		Addition = (VPot + VTotal);
		VPot = Addition;
		Total.text = Addition.ToString();
		Debug.Log ("Total:" + VTotal);
	}
	else {
		Addition = (VTotal - VPot);
		VPot = Addition;
		Total.text = Addition.ToString();
		Debug.Log ("Total:" + VTotal);
	}
} 

function Right () {
	var VPot = int.Parse(Pot.text);
	var VTotal = int.Parse(Total.text);
	var number = Random.Range(0,2);
	Debug.Log ("Number" + number);
	if (VPot <= VTotal && number == 0) {
			//Correct!!!
		Addition = (VPot + VTotal);
		VPot = Addition;
		Total.text = Addition.ToString();
		Debug.Log ("Total:" + VTotal);
	}
	else {
		Addition = (VTotal - VPot);
		VPot = Addition;
		Total.text = Addition.ToString();
		Debug.Log ("Total:" + VTotal);
	} 
}