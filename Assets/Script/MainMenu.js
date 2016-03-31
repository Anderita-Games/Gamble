#pragma strict

function Start () {

}

function QuitGame () 
{
	Debug.Log ("Game is exiting...");
	Application.Quit ();
}

function StartGame () 
{
	Application.LoadLevel("Gamble");
}

function StartT () 
{
	Application.LoadLevel("");
}
