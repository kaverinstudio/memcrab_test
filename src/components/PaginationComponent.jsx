import React from 'react';

const PaginationComponent = ({increment, decrement, page, callPages}) => {

    return (
        <div>
            <svg onClick={decrement} className={page === 0 ? "pagination__icon disabled" : "pagination__icon"}
                 id="Layer_1" version="1.1" viewBox="0 0 64 64"
                 xmlns="http://www.w3.org/2000/svg">
                <g>
                    <g id="Icon-Arrow-Left" transform="translate(28.000000, 328.000000)">
                        <path className="st0"
                              d="M4-272.1c-13.2,0-23.9-10.7-23.9-23.9S-9.2-319.9,4-319.9s23.9,10.7,23.9,23.9 S17.2-272.1,4-272.1L4-272.1z M4-317.3c-11.7,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3S15.7-317.3,4-317.3 L4-317.3z"
                              id="Fill-25"/>
                        <polyline id="Fill-26"
                                  points="4.5,-282.3 -9.2,-296 4.5,-309.7 6.3,-307.8 -5.4,-296 6.3,-284.2 4.5,-282.3    "/>
                        <polygon id="Fill-27" points="-7.3,-297.4 16.7,-297.4 16.7,-294.6 -7.3,-294.6"/>
                    </g>
                </g>
            </svg>
            <svg onClick={increment}
                 className={page + 1 === callPages ? "pagination__icon disabled" : "pagination__icon"} id="Layer_1"
                 version="1.1" viewBox="0 0 64 64"
                 xmlns="http://www.w3.org/2000/svg">
                <g>
                    <g id="Icon-Arrow-Left" transform="translate(28.000000, 328.000000)">
                        <path
                            d="M4-272.1c-13.2,0-23.9-10.7-23.9-23.9S-9.2-319.9,4-319.9s23.9,10.7,23.9,23.9 S17.2-272.1,4-272.1L4-272.1z M4-317.3c-11.7,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3S15.7-317.3,4-317.3 L4-317.3z"
                            id="Fill-25"/>
                        <polyline id="Fill-26"
                                  points="3.5,-282.3 1.7,-284.2 13.4,-296 1.7,-307.8 3.5,-309.7 17.2,-296 3.5,-282.3"/>
                        <polygon id="Fill-27" points="15.3,-294.6 -8.7,-294.6 -8.7,-297.4 15.3,-297.4"/>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default PaginationComponent;