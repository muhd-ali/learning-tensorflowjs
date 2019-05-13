import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as Rxjs from 'rxjs';


class CocoSsdModelWrapper {
    localStorageKey = 'cocoSsdModel';
    private model?: cocoSsd.ObjectDetection;
    private modelObserver = new Rxjs.Subject<cocoSsd.ObjectDetection>();

    constructor() {
        this._load();
    }

    private saveToCache() {        
        // localStorage.setItem(this.localStorageKey, JSON.stringify(this.model!));
    }

    private _load() {
        const model = localStorage.getItem(this.localStorageKey);
        if (model != null) {
            // this.model = model
        } else {
            this.loadFresh();
        }
    }
    
    async loadFresh() {
        this.model = await cocoSsd.load();
        this.modelObserver.next(this.model);
        this.saveToCache();
    }

    load() {
        return new Promise<cocoSsd.ObjectDetection>((resolve) => {
            if (this.model) {
                resolve(this.model!);
            } else {
                this.modelObserver.subscribe((model) => {                    
                    resolve(model);
                    this.modelObserver.unsubscribe();
                });
            }
        })
    }
}

const instance = new CocoSsdModelWrapper();
export default instance;