const initialState = {idPartie: -1, idJoueur: -1, helmet : ['',0,0,0,0], armor: ['',0,0,0,0],weapon:['',0,0,0,0],weaponRange:['',0,0,0,0], bag: ['',0], heal: ['',0],pv : 30, end: 3,for : 3, agi : 3,per:3, ferrailleJoueur: 0, boisJoueur: 0, alcoolJoueur: 0, medicamentJoueur: 0, textileJoueur: 0,feraille: 0,bois: 0, medicament: 0, textile: 0, alcool: 0}
function updateInfo(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'updateMaterialPlayer':
      nextState = {
        ...state,
        ferrailleJoueur: action.value.feraille,
        boisJoueur: action.value.bois,
        alcoolJoueur: action.value.alcool,
        medicamentJoueur: action.value.medicament,
        textileJoueur: action.value.textile,
      }
      return nextState
    case 'updateEquipment':
      nextState = {
        ...state,
        helmet: [action.value.nameHelmet,action.value.endHelmet,action.value.forHelmet,action.value.agiHelmet,action.value.perHelmet],
        armor: [action.value.nameArmor,action.value.endArmor,action.value.forArmor,action.value.agiArmor,action.value.perArmor],
        weapon: [action.value.nameweapon,action.value.endweapon,action.value.forweapon,action.value.agiweapon,action.value.perweapon],
        weaponRange: [action.value.nameweaponRange,action.value.endweaponRange,action.value.forweaponRange,action.value.agiweaponRange,action.value.perweaponRange],
        heal: [action.value.nameHeal,action.value.healValue]
      }
      return nextState
    case 'updateInfoPartie':
        nextState = {
          ...state,
          idPartie: action.value.idPartie,
          idJoueur: action.value.idJoueur
        }
      return nextState
    case 'updateStatsJoueur':
          nextState = {
            ...state,
            end: action.value.end,
            for: action.value.for,
            agi: action.value.agi,
            per: action.value.per,
            pv: action.value.pv,
          }
        return nextState
    case 'updatePvJoueur':
          nextState = {
            ...state,
            pv: action.value.pv
          }
        return nextState
    default :
      return state
    }
  }

export default updateInfo
