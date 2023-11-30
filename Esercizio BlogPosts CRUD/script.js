// Funzione iniziale che si attiva quando il doc
// HTML è completamente caricato

/* DOMContentLoaded è un evento 
che si verifica quando il doc HTML è stato
completamente analizzato e caricato, ma senza
attendere che tutti gli elementi esterni (tipo img)
siano stati scaricati.
*/

document.addEventListener("DOMContentLoaded", function () {
	// Puntatori
	const postsContainer = document.getElementById("posts-container");
	const addPostForm = document.getElementById("add-post-form");


	// JSON Iniziale
	let postsData = {
		posts: [
			{
				id: 1,
				autore: "Andrea",
				titolo: "Forza Napoli",
				testo: "Ma che me ne frega, odio il calcio",
			},
			{
				id: 2,
				autore: "Vittorio",
				titolo: "Basta js",
				testo: "Passo al backend, odio Simone",
			},
			{
				id: 3,
				autore: "Luca",
				titolo: "Prossimo corso?",
				testo: "Il docente lo faccio io",
			},
		],
	};

	// Funzione per visualizzare i primi 3 post nella nostra pagina
	function showPosts(posts) {
    // Clear del container 
		postsContainer.innerHTML = "";
		posts.forEach((post) => {
			// Creo un nuovo elemento div per ogni post
			const postDiv = document.createElement("div");
			postDiv.classList.add("singolo-post");
			postDiv.innerHTML = `
    <h3>${post.titolo}</h3>
    <p><strong>Autore:</strong> ${post.autore}</p>
    <p>${post.testo}</p>
    <button>Rimuovi</button>
    <button>Modifica</button>
    `;

			// Aggiungo il div del post nel container
			postsContainer.appendChild(postDiv);
		});
	};

  // Aggiunta di un nuovo post dal form
  addPostForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Puntatori
    const autoreInput = document.getElementById("autore");
    const titoloInput = document.getElementById("titolo");
    const testoInput = document.getElementById("testo");

    // Creo un nuovo post con i valori che prendo dal form
    const newPost = {
      id: Date.now(), // timestamp 
      autore: autoreInput.value,
      titolo: titoloInput.value,
      testo: testoInput.value,
    };

    // Aggiungiamo il nuovo post all'array dei post!
    postsData.posts.push(newPost);

    // Pulisco i dati di input dopo l'invio
    autoreInput.value = "";
    titoloInput.value = "";
    testoInput.value = "";

    showPosts(postsData.posts);
  })


  showPosts(postsData.posts);
});
