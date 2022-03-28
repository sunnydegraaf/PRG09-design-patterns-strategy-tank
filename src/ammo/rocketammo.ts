import { GameObject }       from "../gameobject.js";
import { Vector }           from "../vector.js";
import { Ammunition }       from "./ammunition.js";
import { Projectile } from "../projectiles/projectile.js";
import { Tank } from "../tank.js";
import { Rocket } from "../projectiles/rocket.js";

export class RocketAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-rocket", position)
    }

    public onCollision(target: GameObject): void {
        if (target instanceof Tank) {
            target.setAmmoType(this)
        }
    }

    public changeAmmo(tank : Tank) : Projectile {
        return new Rocket(tank)
    }
}