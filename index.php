<?php include './server/data/base/database-connect.php'; ?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Morp</title>
    <link rel="stylesheet" href="./client/css/">
</head>
<body>
    <header>
        <div>
            <h1>Morp</h1>
        </div>
    </header>
    <main>
        <div>
            <ul>
                <li>
                    <a href="./server/pages/choose-camp.php">Jouer</a>
                </li>
                <li>
                    <button>Settings</button>
                </li>
                <li>
                    <button>Crédits</button>
                </li>   
            </ul>
        </div>
    </main>
</body>
/** JavaScript Part */

<script src="./client/js/game-menu/main-menu.js" defer></script>
</html>