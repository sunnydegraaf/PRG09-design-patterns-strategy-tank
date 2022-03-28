import { Projectile } from "../projectiles/projectile.js";
import { Tank } from "../tank.js"

export interface AmmoType {
    changeAmmo(tank : Tank) : Projectile
}