import {Warhammer} from "./Warhammer.js";

Hooks.on("beavers-system-interface.init", async function(){
    beaversSystemInterface.register(new Warhammer());
});