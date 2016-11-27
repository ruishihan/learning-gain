##Use the shmat services under the following circumstances:
- For 32-bit applications, where eleven or fewer files are mapped simultaneously and each
is smaller than 256 MB.
- When mapping files larger than 256 MB.
- When mapping shared memory regions that need to be shared among unrelated
processes (no parent-child relationship).
- When mapping entire files.
##Use mmap under the following circumstances:
- Portability of the application is a concern.
- Many files are mapped simultaneously.
- Only a portion of a file needs to be mapped.
- Page-level protection needs to be set on the mapping.
- Private mapping is required.

