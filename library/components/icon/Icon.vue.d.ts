export type WangsIconseverities =
  | 'danger'
  | 'info'
  | 'warning'
  | 'primary'
  | 'success'
  | 'secondary';

/**
 * List of all available icons.
 */
export type WangsIcons =
  | 'add'
  | 'arrow-down'
  | 'arrow-drop-down'
  | 'arrow-go-back'
  | 'arrow-up-s'
  | 'arrow-up-down'
  | 'arrow-left'
  | 'arrow-left-double'
  | 'arrow-left-right'
  | 'arrow-right'
  | 'arrow-right-double'
  | 'arrow-right-fill'
  | 'asset-view'
  | 'assignment'
  | 'attachment-2'
  | 'audit'
  | 'barricade-line'
  | 'bell'
  | 'bell-alert'
  | 'borrow'
  | 'building'
  | 'building-4'
  | 'calculator'
  | 'calendar'
  | 'calendar-todo'
  | 'chat-check'
  | 'change-tag'
  | 'check'
  | 'check-double-fill'
  | 'checkbox-circle'
  | 'checkbox-circle-fill'
  | 'checkbox-blank-circle'
  | 'close'
  | 'close-circle'
  | 'close-circle-fill'
  | 'coins'
  | 'completion'
  | 'dashboard'
  | 'database'
  | 'delete-back'
  | 'delete-bin'
  | 'delete-bin-7'
  | 'device'
  | 'disposal'
  | 'download'
  | 'dropbox'
  | 'dragable-menu'
  | 'edit'
  | 'ellipsis-h'
  | 'emotion-happy-fill'
  | 'emotion-unhappy-fill'
  | 'error'
  | 'error-fill'
  | 'exchange'
  | 'extension-borrow'
  | 'eye'
  | 'eye-off'
  | 'flag'
  | 'file-copy'
  | 'file-copy-2-line'
  | 'file-edit'
  | 'file-history'
  | 'file-history-fill'
  | 'file-info'
  | 'files'
  | 'file-list-2'
  | 'file-list'
  | 'file-settings'
  | 'file-shield-2'
  | 'filter-fill'
  | 'filter'
  | 'folder'
  | 'group'
  | 'hand-coin'
  | 'handheld'
  | 'history'
  | 'image-add'
  | 'indeterminate-circle-fill'
  | 'info'
  | 'information-line'
  | 'list-check'
  | 'link'
  | 'csv'
  | 'xls'
  | 'doc'
  | 'data'
  | 'line-chart'
  | 'link-unlink-m'
  | 'list-settings'
  | 'loader-4'
  | 'logout-box-r'
  | 'mail-open'
  | 'mail-send'
  | 'map-2'
  | 'map-pin'
  | 'menu'
  | 'menu-unfold'
  | 'more'
  | 'move-to'
  | 'node-tree'
  | 'note'
  | 'notification'
  | 'pdf'
  | 'pair-tag'
  | 'pencil'
  | 'phone'
  | 'printer'
  | 'price-tag-3'
  | 'profile'
  | 'qr'
  | 'qr-scan'
  | 'refresh'
  | 'replace-tag'
  | 'report-tag'
  | 'repair-ticketing'
  | 'rfid'
  | 'round-keyboard-arrow-left'
  | 'round-keyboard-arrow-right'
  | 'round-keyboard-double-arrow-left'
  | 'round-keyboard-double-arrow-right'
  | 'search'
  | 'search-line'
  | 'search-eye'
  | 'send-plane-line'
  | 'settings'
  | 'shopping-cart-2'
  | 'smartphone'
  | 'sort-asc'
  | 'sort-desc'
  | 'spinner'
  | 'stack'
  | 'star'
  | 'store'
  | 'subtract'
  | 'time'
  | 'ticket'
  | 'tools'
  | 'tracking'
  | 'unassign'
  | 'upload-2'
  | 'upload-cloud-2'
  | 'user'
  | 'user-add'
  | 'user-follow'
  | 'user-received-2-line'
  | 'user-search'
  | 'user-settings'
  | 'user-shared-2-line'
  | 'user-star'
  | 'user-unfollow'
  | 'verification'
  | 'team'
  | 'mail'
  | 'timer'
  | 'format-clear'
  | 'code-line'
  | 'link-m'
  | 'list-ordered'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'list-unordered'
  | 'external-link'
  | 'whatsapp'
  | 'chat-1-line'
  | 'attachment-2'
  | 'save'
  | 'chat-new-line'
  | 'code-box-line'
  | 'file-chart-line'
  | 'bar-chart-line'
  | 'bug-2-line'
  | 'run-line'
  | 'user-unfollow-line'
  | 'archive-line'
  | 'emotion-happy-line';

export interface IconProps {
  icon: WangsIcons;
  severity?: WangsIconseverities;
  /**
   * Show info on hover.
   */
  info?: string;
  /**
   * Set the position of tooltip.
   */
  tooltipPos?: 'top' | 'right' | 'bottom' | 'left';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  class?: any;
}
