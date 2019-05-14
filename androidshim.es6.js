//Здесь просто заглушка, в окончательный проект этот код никак не попадёт
class Intent {
    setFlags(flags) {

    }
    putExtra(key, val) {
        if (!this._store) {
            this._store = {};
        }
        this._store[key] = val;
    }
}
Intent.FLAG_ACTIVITY_NEW_TASK = 'FLAG_ACTIVITY_NEW_TASK';

class Context {
    getContentResolver() {
        return this;
    }
    getApplication() {
        return this;
    }
    startActivity(intent) {
        
    }
}

