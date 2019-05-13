import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as Rxjs from 'rxjs';


class CocoSsdModelWrapper {
    key = 'cocoSsd';
    private model?: cocoSsd.ObjectDetection;
    private modelObserver = new Rxjs.Subject<cocoSsd.ObjectDetection>();

    saveToCache() {
        console.log(this.model);
    }

    _load() {
        const model = localStorage.getItem(this.key);
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
        // localStorage.setItem(key, JSON.stringify(this.model!));
    }

    load() {
        return new Promise<cocoSsd.ObjectDetection>((resolve) => {
            if (this.model) {
                resolve(this.model!);
            } else {
                console.log('adding subscriber');
                this.modelObserver.subscribe((model) => {
                    console.log('value changed');
                    
                    resolve(model);
                    this.modelObserver.unsubscribe();
                });
            }
        })
    }
}

const instance = new CocoSsdModelWrapper();
instance._load();
export default instance;