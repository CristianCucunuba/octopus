import { FC } from 'react';

type Props = {
    height: number;
    width: number;
    className?: string;
};

const Logo: FC<Props> = (props): JSX.Element => {
    return (
        <svg
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width={props.width}
            height={props.height}
            viewBox='0 0 3600 3400'
            aria-label='Octopus'
            fill='fill-current'
            className={props.className}
        >
            <path
                fill='fill-current'
                d='M1205 3382c-123-37-191-90-183-143l4-27-48 33c-106 74-295 74-453 1-125-58-242-180-288-303-18-49-22-78-21-183 0-116 2-131 33-212 37-98 69-151 93-156 61-12 153 53 164 117 31 172 240 317 368 256 30-14 77-71 64-79-68-41-138-93-193-146-38-36-110-97-158-134-124-96-257-225-329-320C113 1895 0 1553 0 1307c0-228 103-530 240-702 112-141 403-341 634-435 113-46 404-121 561-145 246-36 583-30 825 16 137 26 351 82 436 114 103 39 257 119 358 187 319 214 438 379 522 723 30 124 34 339 8 463-38 185-122 397-205 519-72 104-238 269-381 377-64 48-119 94-122 101-3 8-50 49-105 91-56 43-101 80-101 83 0 18 37 55 66 67 47 20 90 17 156-10 100-41 176-125 200-221 16-68 49-110 102-130 65-25 87-18 118 40 68 124 100 289 79 411-35 200-205 373-421 429-87 23-227 17-291-12-95-43-156-124-174-230-7-47-22-48-48-4-32 55-17 82 83 145 68 42 48 116-43 160-80 39-162 56-267 56-175 0-297-53-389-169l-39-50-36 46c-47 60-122 116-194 144-79 31-279 37-367 11zm366-90c76-36 145-104 183-181 37-71 61-70 100 5 41 78 105 140 184 177 64 31 72 32 192 32 132 0 190-13 254-58l29-20-46-23c-88-45-118-130-75-214 30-58 78-90 134-90h44v48c0 162 101 262 265 262 229 0 447-173 486-388 19-97-9-240-68-355-13-26-15-27-42-12-23 11-33 28-50 82-37 123-109 206-224 258-112 52-222 43-288-23-20-21-38-43-40-50-3-10-22-8-83 8-146 37-276 25-411-40-127-61-236-183-284-319l-18-52-21 59c-65 176-217 311-402 358-86 22-241 15-324-15-70-25-66-25-66-6 0 8-17 32-37 54-98 102-298 70-426-69-52-56-97-143-97-189 0-23-44-64-65-59-20 4-67 110-85 190-7 32-11 90-8 137 4 67 11 93 41 155 85 172 282 286 471 274 76-5 123-24 169-67 44-40 60-79 66-161l6-75 34-3c51-5 73 4 113 43 44 44 62 105 47 157-10 38-71 101-108 113-29 9-26 17 11 39 71 43 137 56 258 53 106-2 120-5 181-35zm-448-145c51-35 52-90 3-136l-23-22-6 56c-3 31-17 75-30 100l-25 44 27-12c14-6 39-20 54-30zm-419-784c-24-76-28-198-11-279 24-112 71-198 157-285 115-117 240-169 405-169 98 0 165 15 252 56 126 60 235 181 285 316l21 59 18-50c29-85 70-150 135-215 252-255 688-212 884 87 82 125 113 313 76 457-8 30-14 56-13 57 6 5 165-131 241-205 159-156 242-290 314-508 89-267 91-462 7-719-27-83-84-205-113-243-17-22-19-22-51-6-74 37-169-6-191-86-10-37-1-90 20-114 13-16 2-26-114-105l-90-61-24 23c-20 18-35 22-92 22-59 0-72-3-95-25-37-34-55-72-55-114 0-29-4-36-30-45-27-9-30-8-30 10 0 55-74 131-156 162-66 25-179 33-256 17-181-35-271-156-208-279l19-39-31-6c-42-8-314-7-363 3-35 6-37 8-17 15 67 22 96 157 49 226-88 132-297 75-297-81 0-56 11-90 39-118l20-20-32 5c-45 8-155 33-198 44l-36 10 5 55c6 79-31 154-96 192-58 34-147 38-201 9-39-21-91-74-91-93 0-18-6-17-61 14-43 23-48 28-35 42 58 67 68 190 23 278-45 87-124 133-229 133-68 0-135-24-176-63-24-22-24-22-39-2-52 70-123 256-153 405-36 178-22 336 51 555 94 285 203 432 489 664 41 33 78 60 82 61 3 0 0-21-8-47z'
            />
            <path
                fill='fill-current'
                d='M3056 1356c-82-31-126-97-126-192 0-70 27-122 83-161 35-24 50-28 112-28 81 0 123 21 166 83 20 30 24 48 24 113 0 71-2 80-31 116-17 21-45 46-62 56-42 24-118 31-166 13zM558 1344c-72-39-99-203-49-291 46-80 124-92 180-27 38 42 55 104 48 171-13 123-97 192-179 147zM1583 1090c-40-24-53-48-53-100 0-57 50-110 104-110 49 0 92 23 111 60 54 105-60 212-162 150zM1061 1069c-99-50-149-131-150-245-1-85 23-149 79-204 54-55 118-80 200-80 116 0 198 50 249 152 71 142 18 308-123 380-27 14-66 23-116 25-69 4-80 2-139-28zM2485 1071c-87-40-135-120-135-223 1-142 97-238 240-238 144 0 240 96 240 240 0 104-53 187-142 224-52 22-153 20-203-3zM1927 756c-73-27-109-79-109-158 0-163 222-219 302-76 28 50 24 134-7 176-42 57-121 82-186 58z'
            />
            <g fill='#ffffff'>
                <path d='M1211 2590c-107-22-202-98-249-198-23-49-27-70-27-147 0-78 4-97 28-147 36-74 119-150 195-178 87-33 195-25 280 20 122 65 185 171 185 310 0 61-5 87-28 138-64 143-234 232-384 202zm130-253c42-28 59-60 59-112 0-51-28-97-73-118-43-21-67-21-111-3-69 29-102 130-61 192 41 63 126 82 186 41zM2300 2589c-254-52-368-348-212-554 40-54 122-109 187-126 22-6 71-9 110-7 177 9 314 146 323 323 5 85-7 132-50 205-71 118-224 187-358 159zm141-252c71-47 85-134 32-197-77-93-233-37-233 83 0 109 113 173 201 114z' />
            </g>
        </svg>
    );
};

export default Logo;
