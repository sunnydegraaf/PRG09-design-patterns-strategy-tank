import { Projectile } from "./projectile.js";
export class Missile extends Projectile {
    constructor(tank) {
        super("missile", tank);
        this.fireRate = 2000;
        this.vector = tank.Position;
    }
    update() {
        super.update();
    }
}
