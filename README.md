
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>verso la sostenibilita</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Pulsante hamburger -->
    <div class="hamburger-menu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>

    <!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-header">
            <h3>Menu</h3>
        </div>
        <ul class="sidebar-menu">
            <li><a href="ed civica sito.html">Home</a></li>
        </ul>
    </div>

    <!-- Contenuto principale -->
    <div class="main-content">
        <header>
            <h1>Energia solare a Ragusa: un territorio che guarda al futuro</h1>

        </header>
        <!-- Contenuto della pagina -->
        <div class="container" style="background-color: #800020; margin-right: 2%; width: 700px; height: 550px; border-radius: 25%; margin-top: 130px;" >
            <div class="section">
                <h1>Crescita del fotovoltaico: dati e numeri</h1>
                Il fotovoltaico rappresenta oggi una delle fonti rinnovabili più sviluppate nel territorio ragusano. Con oltre 8.500 impianti installati e una potenza complessiva di 237 MW, la produzione annua di energia supera i 325 GWh, contribuendo in modo significativo alla copertura del fabbisogno elettrico locale. Gli impianti sono distribuiti tra settore residenziale, industriale, agricolo e terziario, con un’elevata efficienza media e una crescente attenzione verso sistemi di accumulo e soluzioni innovative.
            </div>
        </div>

        <div class="container" style="background-color: #800020; margin-left: 2%; width: 700px; height: 550px; border-radius: 25%; margin-top: 130px;" >
            <div class="section">
                <h1>Innovazione e sostenibilità: agrivoltaico e comunità energetiche</h1>
                Oltre ai classici impianti su tetto e a terra, Ragusa sta sperimentando modelli innovativi come l’agrivoltaico, che integra la produzione di energia con l’attività agricola. Un esempio è l’impianto operativo a Scicli, dove oltre il 75% dell’area è coltivata con specie locali. Produce circa 20 GWh/anno, energia sufficiente per oltre 5.000 famiglie. Un altro progetto d’avanguardia è la prima comunità energetica agricola italiana, nata a Ragusa: un sistema collaborativo in cui più aziende condividono l’energia prodotta, ottenendo risparmi economici e benefici ambientali.
            </div>
        </div>
        
        
        <div class="container" style="background-color: #800020; margin-right: 2%; width: 700px; height: 550px; border-radius: 25%; margin-top: 130px;" >
            <div class="section">
                <h1>Ruolo delle istituzioni e prospettive future</h1>
                Le istituzioni locali stanno assumendo un ruolo attivo nella promozione delle energie rinnovabili. Il Comune di Ragusa ha lanciato un piano per installare impianti fotovoltaici sui tetti degli edifici comunali, con l’obiettivo di aumentare la produzione da fonti pulite e reinvestire i proventi in iniziative sociali. Attualmente, la produzione è ancora sotto la media nazionale, ma i nuovi bandi puntano a colmare il divario nei prossimi anni.
            </div>
        </div>

        <!-- Footer -->
        <footer>
            <p>&copy; 2025 Oasi Digitale - Tutti i diritti riservati</p>
        </footer>
    </div>

    <!-- Script per il menu hamburger -->
    <script>
        const hamburger = document.querySelector('.hamburger-menu');
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            hamburger.classList.toggle('active');
            mainContent.classList.toggle('shifted');
        });
    </script>
</body>
</html> 
