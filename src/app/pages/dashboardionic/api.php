case 'dashboard':

// Total de usuários
$totalUsuarios = $pdo->query("
SELECT COUNT(*) as total
FROM usuarios
")->fetch(PDO::FETCH_ASSOC);

// Usuários cadastrados hoje
$usuariosHoje = $pdo->query("
SELECT COUNT(*) as total
FROM usuarios
WHERE DATE(data_cadastro) = CURDATE()
")->fetch(PDO::FETCH_ASSOC);
SELECT status, COUNT(*) as total
FROM usuarios
GROUP BY status
// Usuários cadastrados no mês
$usuariosMes = $pdo->query("
SELECT COUNT(*) as total
FROM usuarios
WHERE MONTH(data_cadastro) = MONTH(CURDATE())
AND YEAR(data_cadastro) = YEAR(CURDATE())
")->fetch(PDO::FETCH_ASSOC);

echo json_encode([
"success" => true,
"total_usuarios" => $totalUsuarios['total'],
"usuarios_hoje" => $usuariosHoje['total'],
"usuarios_mes" => $usuariosMes['total']
]);

break;