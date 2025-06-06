import {create} from "zustand"


const useStore = create((set)=>({

darkMode:false,

cambiarColor:()=>set((state)=>({darkMode:!state.darkMode}))

}))

export default useStore