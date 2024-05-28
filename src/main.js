import {Warhammer} from "./warhammer.js";

Hooks.on("beavers-system-interface.init", async function(){
    beaversSystemInterface.register(new Warhammer());
});