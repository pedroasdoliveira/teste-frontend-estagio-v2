import equipments from '../equipment.json'

export const equipmentName = () => {
    equipments.map((equipment) => {
        const equipmentId = equipment.id
        
        if (equipmentId) {
            const equipmentName = equipment.name

            return equipmentName
        }
    })
}

export const equipementModel = () => {
    equipments.map((equipment) => {
        
    })
}