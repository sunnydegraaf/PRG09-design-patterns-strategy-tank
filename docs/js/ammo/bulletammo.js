import { Bullet } from "../projectiles/bullet.js";
import { Tank } from "../tank.js";
import { Ammunition } from "./ammunition.js";
export class BulletAmmo extends Ammunition {
    constructor(position) {
        super("ammo-bullet", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.setAmmoType(this);
        }
    }
    changeAmmo(tank) {
        return new Bullet(tank);
    }
    ;
}
