const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const token = urlParams.get('token');

function Redefinir()
{
    PlayFab.settings.titleId = "F4931";
    PlayFab.settings.developerSecretKey = "587Q8GTOFIW3XMKK9FTWDSFGRDAZT61WZ6PSH6ZXZW1QDRXDEE";
    
    var novaSenha = document.getElementById("senha").value;

	var ResetPasswordRequest = {
        "Password": novaSenha,
        "Token": token
    };
    
	PlayFabAdminSDK.ResetPassword(ResetPasswordRequest, AuthenticationCallback);
}

function AuthenticationCallback(response, error)
{
	if(error)
	{
		//console.log(error);
        document.getElementById("feedback").innerText = "Erro ao redefinir senha."
        document.getElementById("feedback").style.color = "#FF0000";
	}	
	else
    {
        //console.log("MUDOU SENHA!");
        document.getElementById("feedback").innerText = "Senha redefinida!"
        document.getElementById("feedback").style.color = "#AFF050";
	}
}
