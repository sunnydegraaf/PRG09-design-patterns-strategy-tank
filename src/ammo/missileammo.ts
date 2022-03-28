import { GameObject }       from "../gameobject.js";
import { Missile } from "../projectiles/missile.js";
import { Vector }           from "../vector.js";
import { Ammunition }       from "./ammunition.js";
import { Projectile } from "../projectiles/projectile.js";
import { Tank } from "../tank.js";

export class MissileAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-missile", position)
    }

    public onCollision(target: GameObject): void {
        if (target instanceof Tank) {
            target.setAmmoType(this)
        }
    }

    public changeAmmo(tank : Tank) : Projectile {
        return new Missile(tank)
    };
}