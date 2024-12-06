<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

// Timezone
date_default_timezone_set('America/Sao_Paulo');

//Definindo diretorio principal
define('DIRETORIO_PRINCIPAL', '/landing-page-backend');
define('DIRETORIO_TEMPLATES', 'src/Views');
define('URL_BASE', 'http://projetos.marquindosom.com'.DIRETORIO_PRINCIPAL.'/');

define('SQL_DB_SERVER', 'localhost');
define('SQL_DB_USER', 'u730418050_landing_page');
define('SQL_DB_PASS', 'Emijota22@');
define('SQL_DB_DATABASE', 'u730418050_landing_page');
// define('landing_page', 'nome_banco_de_dados');
 