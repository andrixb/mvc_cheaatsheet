/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
(function () {
    var APP_NAMESPACE = 'Application';
    var MODULE_NAME = 'Model';

    // We need to do a check before we create the namespace to avoit to overwrite it
    window[APP_NAMESPACE] = window[APP_NAMESPACE] || {};

    window[APP_NAMESPACE][MODULE_NAME] = function () {
        this.Model = {
            _items: [],
            _selectedIndex: -1,

            _itemAdded: new Observer(),
            _itemRemoved: new Observer(),
            _selectedItemChanged: new Observer()
        };

        function _getItems() {
            return [].concat(this.Model._items);
        }

        function _addItem(element) {
            this.Model._items.push(element);
            this.Model._itemAdded.notify({ item: element });
        }

        function _removeItem(index) {
            var item = this.Model._item[index];
            this.Model._items.splice(index, 1);
            this.Model._itemRemoved.notify({ item: item });

            if (index === this.Model._selectedIndex) {
                this.setSelectedIndex(-1);
            }
        }

        function _getItemIndex() {
            return this.Model._selectedIndex;
        }

        function _setSelectedIndex(index) {
            var itemChanged = this.Model._items[index];

            this.Model._selectedIndex = index;
            this.Model._selectedItemChanged({ items: itemChanged });
        }

        return {
            init: function () {

            },
            getItems: _getItems,
            addItem: _addItem,
            removeItem: _removeItem,
            getSelectedIndex: _getItemIndex,
            setSelectedIndex: _setSelectedIndex
        };
    };
})();
