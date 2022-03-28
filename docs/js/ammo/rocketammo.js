import { Ammunition } from "./ammunition.js";
import { Tank } from "../tank.js";
import { Rocket } from "../projectiles/rocket.js";
export class RocketAmmo extends Ammunition {
    constructor(position) {
        super("ammo-rocket", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.setAmmoType(this);
        }
    }
    changeAmmo(tank) {
        return new Rocket(tank);
    }
}
