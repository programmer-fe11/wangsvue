import useToast from './toast.util';
import { formatUserName, getInititalName } from './textFormatter.util';
import { checkRouteAccess } from './role.util';
import { formatDate, formatISODate, formatDateReadable } from './date.util';
import { queryParamsStringfy } from './queryParamsStringfy.util';
import getSalesRole from './getSalesRole.util';
import filterOptions from './filterOptions.util';
import exportToExcel from './exportToExcel.util';
import genPlaceholder from './genPlaceholder.util';
import getStatusSeverity from './statusSeverity.util';
import getAttachmentIcon from './getAttachmentIcon.util';
import isEmptyObject from './object.util';
import getUser from './getUser.util';
import getUserType from './getUserType.util';
import getProjectPermission from './getProjectPermission.util';
import isIntersect from './isIntersect';
import convertJsonImage from './convertJsonImage.util';

const getNestedProperyValue = (
  object: object,
  property: string,
): string | boolean | number | object => {
  const properties = property.split('.');
  return properties.reduce((o, p) => o?.[p as keyof object], object);
};

const convertToArrayClass = (classes?: string | string[]): string[] => {
  if (!classes) return [];

  return Array.isArray(classes) ? classes : [classes];
};

export {
  checkRouteAccess,
  formatUserName,
  convertToArrayClass,
  getNestedProperyValue,
  useToast,
  exportToExcel,
  filterOptions,
  isEmptyObject,
  genPlaceholder,
  getInititalName,
  getStatusSeverity,
  getAttachmentIcon,
  getUser,
  getProjectPermission,
  getUserType,
  getSalesRole,
  isIntersect,
  convertJsonImage,
  formatDate,
  formatISODate,
  formatDateReadable,
  queryParamsStringfy,
};
