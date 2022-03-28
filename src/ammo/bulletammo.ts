import { GameObject } from "../gameobject.js";
import { Bullet } from "../projectiles/bullet.js";
import { Projectile } from "../projectiles/projectile.js";
import { Tank } from "../tank.js";
import { Vector } from "../vector.js";
import { Ammunition } from "./ammunition.js";
import { AmmoType } from "../ammo/ammotype.js";

export class BulletAmmo extends Ammunition implements AmmoType {
    constructor(position: Vector) {
        super("ammo-bullet", position)
    }

    public onCollision(target: GameObject): void {
        if (target instanceof Tank) {
            target.setAmmoType(this)
        }
    }

    public changeAmmo(tank : Tank) : Projectile {
        return new Bullet(tank)
    };
}