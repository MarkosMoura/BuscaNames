function carregando(){
            alert("Um momento a página está carregando");
			nome = prompt("Qual seu nome por favor ?");
			confirm(nome+" Quer saber quantos nomes podem ser formados com apenas uma letra ?");
			alert("Obrigado pela visita");
			let caixa1 = document.getElementById("caixa");
			caixa1.focus();
}
function onkey(){
		/*Inserindo arrays dentro de um array*/
		nomesa = ["Aarão","Abel","Aberlado","Abigail","Abilio","Abraão","Acácia",
		"acácio","Adão","Adelia","Ademar","Adriano","Ágata",nomesb = ["Barbara",
		"Basílio","Beatriz","Benedito","Benjamim","Bento"],nomesc = ["Caetano",
		"Caio","Calebe","Calisto","Calvin","Calvino","Camilo","Cândido","Cesár",
		"Carlos","Ciro","Cláudio","Celso","Clóvis","Cicero","Cristiano"],
		nomesd = ["Davi","Davilla","Damiana","Damião","Daniel","Danilo","Daniela",
		"Dan","Dácio","Dálila","Dalva","Darlene","Denis","Denise"],
		nomesf = ["Fabricio","Fabiola","Fabio","Flavio","Flavia","Felipe"],
		nomesg = ["Gabriel","Gabriela","Guilherme","Gustavo","Gideão","Geraldo",
		"Gerson","Gaspar","Getúlio","Gilberto","Gil"],nomes_s = ["Sabrina","Savio",
		"Saulo","Sandra","Sandro"],nomesv1 = ["Vitória","Vitor","Virna","Vává",
		"Vanderlei","Vanderleia","Valdo","Valentim","Valdir","Vanda","Verônica"],
		nomesm = ["Mariana","Maria","Mario","Marina","Marlon","Marinho","Marcio",
		"Marcos","Marcia","Marciano"]];
		
		let caixa = document.getElementById("caixa");
		let select = document.getElementById("select");
		let amostra = document.getElementById("amostra");
		select.style.color = "#fff";
		select.style.padding = "2px";
		select.style.display = "block";
		select.style.width = "630px";
		select.style.textAlign = "center";

		nomesa1 = nomesa.length;
		nomesb1 = nomesa.length;
		nomesc1 = nomesa.length;
		nomesd1 = nomesa.length;
		nomess = nomesa.length;
		nomesgg = nomesa.length;
		nomesff = nomesa.length;
		nomes = nomesa.length;
		nomesv = nomesa.length;
		select.innerHTML = '';

			if (caixa.value == "a"|| caixa.value == "A") {
			amostra.innerHTML = "Nomes com a Letra A:<br><br>";
			for (i = 0;i<nomesa1;i++){
			var item = document.createElement("option");
			item.text = `${nomesa[i]}`;
			delete nomesa[13];
			delete nomesa[14];
			delete nomesa[15];
			delete nomesa[16];
			delete nomesa[17];
			delete nomesa[18];
			delete nomesa[19];
			delete nomesa[20];
			nomesa.splice(13,1,"Ana"),nomesa.splice(14,1,"Aline"),
			nomesa.splice(15,1,"Amanda"),nomesa.splice(16,1,"Alice"),
			nomesa.splice(17,1,"Ayla"),nomesa.splice(18,1,"Alana"),
			nomesa.splice(19,1,"Andréia"),nomesa.splice(20,1,"Agnes");
			select.appendChild(item);}
		caixa.value = '';
		caixa.focus();
		select.style.background = "#533BB8";}

	else if (caixa.value == "b"|| caixa.value == "B") {
		amostra.innerHTML = "Nomes com a Letra B:<br><br>";
		for(i=0;i<nomesb1;i++){
			var item = document.createElement("option");
			item.text = `${nomesb[i]}`;
			nomesb.splice(6,1,"Bianca"),nomesb.splice(7,1,"Bruna"),
			nomesb.splice(9,1,"Betina"),nomesb.splice(10,1,"Barbosa"),
			nomesb.splice(11,1,"Benedita"),nomesb.splice(12,1,"Bernadete"),
			nomesb.splice(13,1,"Branca"),nomesb.splice(14,1,"Bela"),
			nomesb.splice(15,1,"Brenna"),nomesb.splice(16,1,"Bonnie"),
			nomesb.splice(17,1,"Berta"),nomesb.splice(18,1,"Bendita"),
			nomesb.splice(19,1,"Benjamim"),nomesb.splice(20,1,"Benta");
			select.appendChild(item);}
		caixa.value = '';
		caixa.focus();
		select.style.background = "#3349E8";}

			else if (caixa.value == "c"|| caixa.value == "C") {
		amostra.innerHTML = "Nomes com a Letra C:<br><br>";
		for(i=0;i<nomesc1;i++){
			var item = document.createElement("option");
			item.text = `${nomesc[i]}`;
			nomesc.splice(16,1,"Cecília"),nomesc.splice(17,1,"Catarina"),
			nomesc.splice(18,1,"Camila"),nomesc.splice(19,1,"Carolina"),
			nomesc.splice(20,1,"Clara");
			select.appendChild(item);}
		caixa.value = '';
		caixa.focus();
	    select.style.background = "#0865ED";}

			else if (caixa.value == "d"|| caixa.value == "D") {
		amostra.innerHTML = "Nomes com a Letra D:<br><br>";
		for(i=0;i<nomesd1;i++){
			var item = document.createElement("option");
			item.text = `${nomesd[i]}`;
			nomesd.splice(14,1,"Danunbia"),nomesd.splice(15,1,"Diogo"),
			nomesd.splice(16,1,"Douglas"),nomesd.splice(17,1,"Diego"),
			nomesd.splice(18,1,"Derick"),nomesd.splice(19,1,"Dante"),
			nomesd.splice(20,1,"Denilson");
			select.appendChild(item);}
		caixa.value = '';
		caixa.focus();
		select.style.background = "#9E3427";}

		else if (caixa.value == "s"|| caixa.value == "S") {
		amostra.innerHTML = "Nomes com a Letra S:<br><br>";
		for(i=0;i<nomess;i++){
			var item = document.createElement("option");
			item.text = `${nomes_s[i]}`;
			nomes_s.splice(5,1,"Sara"),nomes_s.splice(6,1,"Samara"),
			nomes_s.splice(7,1,"Samuel"),nomes_s.splice(8,1,"Samuel"),
			nomes_s.splice(9,1,"Silvio"),nomes_s.splice(10,1,"Sofia"),
			nomes_s.splice(11,1,"Sophia"),nomes_s.splice(12,1,"Stefany"),
			nomes_s.splice(13,1,"Simone"),nomes_s.splice(14,1,"Sheila"),
			nomes_s.splice(15,1,"Silvana"),nomes_s.splice(16,1,"Solange"),
			nomes_s.splice(17,1,"Suelen"),nomes_s.splice(18,1,"Selma"),
			nomes_s.splice(19,1,"Selena"),nomes_s.splice(20,1,"Socorro");
			select.appendChild(item);}
		caixa.value = '';
		caixa.focus();
		select.style.background = "#232863";}

		else if (caixa.value == "f"|| caixa.value == "F") {
		amostra.innerHTML = "Nomes com a Letra F:<br><br>";
		for(i=0;i<nomesff;i++){
			var item = document.createElement("option");
			item.text = `${nomesf[i]}`;
			nomesf.splice(6,1,"Franciele"),nomesf.splice(7,1,"Fernanda"),
			nomesf.splice(8,1,"Fabiana"),nomesf.splice(9,1,"Francisca"),
			nomesf.splice(10,1,"Felicia"),nomesf.splice(11,1,"Francine"),
			nomesf.splice(12,1,"Filomena"),nomesf.splice(13,1,"Francis"),
			nomesf.splice(14,1,"Flora"),nomesf.splice(15,1,"Felina"),
			nomesf.splice(16,1,"Fátima"),nomesf.splice(17,1,"Feba"),
			nomesf.splice(18,1,"Fernando"),nomesf.splice(19,1,"Franklin"),
			nomesf.splice(20,1,"Fátua");
			select.appendChild(item);}
		caixa.value = '';
		caixa.focus();
		select.style.background = "#238F63";}

		else if (caixa.value == "g"|| caixa.value == "G") {
		amostra.innerHTML = "Nomes com a Letra G:<br><br>";
		for(i=0;i<nomesgg;i++){
			var item = document.createElement("option");
			item.text = `${nomesg[i]}`;
			nomesg.splice(11,1,"Graziela"),nomesg.splice(12,1,"Giovana"),
			nomesg.splice(13,1,"Gisele"),nomesg.splice(14,1,"Glaucia"),
			nomesg.splice(15,1,"Glória"),nomesg.splice(16,1,"Gleice"),
			nomesg.splice(17,1,"Gilmara"),nomesg.splice(18,1,"Graça"),
			nomesg.splice(19,1,"Gilda"),nomesg.splice(20,1,"Greta");	
			select.appendChild(item);}
		caixa.value = '';
		caixa.focus();
		document.getElementById("select").style.background = "#3B454D";}
			else if (caixa.value == "m"|| caixa.value == "M") {
			amostra.innerHTML = "Nomes com a Letra M:<br><br>";
			for (i = 0;i<nomes;i++){
			var item = document.createElement("option");
			item.text = `${nomesm[i]}`;
			nomesm.splice(10,1,"Martim"),nomesm.splice(11,1,"Moisés"),
			nomesm.splice(12,1,"Micael"),nomesm.splice(13,1,"Marcelo"),
			nomesm.splice(14,1,"Murilo"),nomesm.splice(15,1,"Mateus"),
			nomesm.splice(16,1,"Miguel"),nomesm.splice(17,1,"Maurício"),
			nomesm.splice(18,1,"Manoel"),nomesm.splice(19,1,"Mauro"),
			nomesm.splice(20,1,"Matias");
			select.appendChild(item);}
		caixa.value = '';
		caixa.focus();
		select.style.background = "#58196796";}

			else if (caixa.value == "v"|| caixa.value == "V") {
			amostra.innerHTML = "Nomes com a Letra V:<br><br>";
			for (i = 0;i<nomesv;i++){
			var item = document.createElement("option");
			item.text = `${nomesv1[i]}`;
			nomesv1.splice(11,1,"Valentina"),nomesv1.splice(12,1,"Vanessa"),
			nomesv1.splice(13,1,"Valéria"),nomesv1.splice(14,1,"Vânia"),
			nomesv1.splice(15,1,"Viviane"),nomesv1.splice(16,1,"Vera"),
			nomesv1.splice(17,1,"Virgínia"),nomesv1.splice(18,1,"Valquiria"),
			nomesv1.splice(19,1,"Valda"),nomesv1.splice(20,1,"Verena");	
			select.appendChild(item);}
		caixa.value = '';
		caixa.focus();
		select.style.background = "black";}

	else {
		alert("Nosso Sistema não Encontrou essa Letra Desculpe.");
		caixa.value = '';
		caixa.focus();
		amostra.innerHTML = '';
		select.style.display = "none";}
	}
	
	function clica(){
		document.querySelector("img.icon").src = 
		"2799205-creative-idea-light_99776.png";
		document.querySelector("main").style.background = "black";
		document.body.style.background = "black";
		caixa.value = '';
		caixa.focus();
		amostra.innerHTML = '';
		select.style.display = "none";}
	



