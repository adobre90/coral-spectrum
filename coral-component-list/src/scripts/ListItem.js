/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2017 Adobe
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 */

import {ComponentMixin} from '../../../coral-mixin-component';
import {ListItemMixin} from '../../../coral-mixin-list';

/**
 @class Coral.List.Item
 @classdesc A List item component
 @htmltag coral-list-item
 @extends {HTMLElement}
 @extends {ComponentMixin}
 @extends {ListItemMixin}
 */
class ListItem extends ListItemMixin(ComponentMixin(HTMLElement)) {
  /** @ignore */
  constructor() {
    super();
    
    // Events
    this._delegateEvents(this._events);
  }
}

export default ListItem;