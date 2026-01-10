export function getRoleById(role_id: number) {
    if(role_id === 1) {
        return 'Operador'
    }

    if(role_id === 4) {
        return 'Administrador'
    }
}