
	let produtos = [
		{prodDesc: "Mamão Papaya", prodPreco: 5.50},
		{prodDesc: "Laranja", prodPreco: 1.49},
		{prodDesc: "Abacaxi", prodPreco: 8.70},
		{prodDesc: "Uva", prodPreco: 8.90},
		{prodDesc: "Nectarina", prodPreco: 1.30},
	]

window.onload  = function(){
	

	(()=>{
		let listaProdutos = document.querySelector("div > ul");

		for(let precos in produtos){
			listaProdutos.innerHTML += `<li class='itemProduto' data-precos=${produtos[precos].prodPreco}>${produtos[precos].prodDesc}</li>`
		}
	})(produtos)

	const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
	const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
	const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

	let itemCesta

	let armazenaItens =[];
	let totalPedido = 0;


	itemProduto.forEach((item)=>{
		item.addEventListener('click', ()=>{
			li = document.createElement('li');
			li.dataset.precos = item.dataset.precos;

			if(armazenaItens.indexOf(item.textContent) == -1){
				armazenaItens.push(item.textContent);

				itemCesta = cestaDoCliente.appendChild(li);
				itemCesta.textContent = item.textContent;

				itemCesta.addEventListener('click', (foco)=>{
					armazenaItens.splice(armazenaItens.indexOf(foco.target.textContent),1);
					cestaDoCliente.removeChild(foco.target);
					totalPedido -= Number(foco.target.dataset.precos);
					mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
				});
				
				totalPedido += Number(item.dataset.precos);
				mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
				
			}else{
				alert(`Este item ${item.textContent} já consta de sua cesta`);

			};
		});

	});


}