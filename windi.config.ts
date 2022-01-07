import {defineConfig} from 'windicss/helpers';

const classNames = (classes: string[]): string => classes.join(' ');

const clsx = (...classes: string[]): string => classNames(classes);

const isSingle = (classes: string[]): boolean =>
  classes.length === 1 && !classes[0].includes(' ');

const classes = (classes: string[]): string =>
  isSingle(classes) ? classes[0] : `(${classNames(classes)})`;

const withPrefix = (prefix: string, classNames: string[]): string =>
  [prefix, classes(classNames)].join(':');

const prefixClasses =
  (prefix: string) =>
  (...classes: string[]): string =>
    withPrefix(prefix, classes);

const [dark, focus, hover, sm, md, lg, disabled, placeholder, selection] = [
  'dark',
  'focus',
  'hover',
  'sm',
  'md',
  'lg',
  'disabled',
  'placeholder',
  'selection'
].map(prefixClasses);

export default defineConfig({
  shortcuts: {
    container: 'flex flex-col max-w-md mx-auto pt-24 items-center',
    button: clsx(
      'inline-flex font-medium rounded-md text-sm px-5 py-2 text-center items-center',
      focus('ring-4 outline-none'),
      'text-white bg-blue-700',
      'max-w-[fit-content]',
      hover('bg-blue-800'),
      dark('bg-blue-600', hover('bg-blue-700'), focus('focus:ring-blue-800'))
    ),
    'tippy-box': clsx(
      'inline-block py-2 px-3 text-sm font-medium rounded-lg shadow-sm',
      'text-white bg-gray-900'
    )
  }
});
