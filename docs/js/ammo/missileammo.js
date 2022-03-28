import { Missile } from "../projectiles/missile.js";
import { Ammunition } from "./ammunition.js";
import { Tank } from "../tank.js";
export class MissileAmmo extends Ammunition {
    constructor(position) {
        super("ammo-missile", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.setAmmoType(this);
        }
    }
    changeAmmo(tank) {
        return new Missile(tank);
    }
    ;
}
