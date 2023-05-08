export default function () {
    // Same values are used in _helpers.scss.
    // Any changes here in the values of breakpoints should be reflected there too.
    const breakpoints = useBreakpoints({
        desktop: 720,
    });

    const desktop = breakpoints.greaterOrEqual('desktop');

    return { desktop };
};
