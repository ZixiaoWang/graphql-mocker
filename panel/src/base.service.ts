export class BaseService {
    callbacks: Set<Function> = new Set();

    register(callback: Function): void {
        this.callbacks.add(callback);
    }

    unregister(callback: Function): void {
        this.callbacks.delete(callback);
    }

    notify(...args: any[]): void {
        this.callbacks.forEach((callback: Function) => {
            if (callback && typeof callback === "function") {
                if (args.length === 0) {
                    callback(Math.random());
                } else {
                    callback(...args);
                }
            }
        })
    }
}