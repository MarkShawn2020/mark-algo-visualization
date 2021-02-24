//
// Created by 南川 on 2021/2/22.
//
#include "cstdio"
#include "iostream"
#include "map"
#include "string"
#include "cstring"
using namespace std;

template<typename A> ostream & operator << (ostream & cout, vector<A> const &v) { cout << "["; for(int i = 0; i < v.size(); i++) {if (i) cout << ", "; cout << v[i];} return cout << "]"; }
inline void PrintAlphabet(int n=26, const char * name="alphabet") { printf("-> %10s: [", name);for(int i=1; i <= n; ++i) printf(" \033[04m%c\033[0m ", 'a' - 1 + i);printf("\b]\n"); }
inline void PrintArr(int *arr, int n, const char * name= "") { printf("-> %10s: [", name);for(int i=0; i < n; ++i) printf(arr[i] ? "\033[01;42m %1d \033[0m" : "%2d ", arr[i]);printf("\b]\n"); }
inline void PrintId(int n, const char * name="id") { printf("-> %10s: [", name);for(int i=1; i <= n; ++i) printf("%2d ", i);printf("\b]\n"); }


const int N = 1000000;           // 目标串的最大长度
const int DOMAIN_SIZE = 26;         // 每个字符的取值空间
const int MAX_NODES = 50 * 10000;   // 所有子串的最大总长

int n, ans;
char tmp[50 + 1];
bool vis[N];
int nodes[MAX_NODES + 1][DOMAIN_SIZE + 1]; // 记录字典树的每个结点编号信息
int isEnd[MAX_NODES + 1];                 // 记录字典树的结点是否是末端结点

inline int encode(char & c) {return c - 'a';}

/**
 * 理解字典树的关键，首先脑海中要有一棵字典树的图，意识到这张图里的这棵树上的每个结点可能被共享多次，但必须要有唯一标识
 * 所以我们需要一个数据结构去记录这些结点，最快的方式就是用一个二维数组，每个结点在数组中的行数就是id，列数就是其ascii转换值
 * 这就对每个结点进行了编号，它能保证每个结点是唯一的
 * 问题是，我们该开辟多大的数组呢？封顶就是所有字符的总长度，若有k个子串，每个子串长度平均为m，取值空间为26，则数组就是km*26的大小
 */
struct Trie {
    int size;
    explicit Trie(int n) {
        size = 1;
        memset(nodes[0], 0, sizeof nodes[0]);
        memset(vis, 0, sizeof vis);
        for(int i=0; i < n; ++i) {
            scanf("%s", tmp);
            printf(">>> i: %d, s: %s\n", i, tmp);
            insert(tmp);
        }
        print();
    }
    void insert(char * s) {
        // row和size大多数时候相同，唯一区别就是每个新的字符串都需要从头开始匹配，一旦发现与旧的字符串不匹配，row就等于size
        int row = 0;
        for(int i=0; i<strlen(s); ++i) {
            int col = encode(s[i]);
            if(!nodes[row][col]) {
                memset(nodes[size], 0, sizeof nodes[size]);
                isEnd[size] = 0;        // 中途的字符都不是结尾位，最后结束再更新
                nodes[row][col] = size++;
            }
            row = nodes[row][col];  // 同一个字符串中的下一个字符存储位置始终紧跟上个字符之后
        }
        isEnd[row]++;
    }
    void print() const {
        printf("\n");
        PrintAlphabet();
        for(int i=0; i < size; ++i) {
            char ss[10];
            sprintf(ss, "nodes[%d]", i);
            PrintArr(nodes[i], 26, ss);
        }
        PrintId(size);
        PrintArr(&isEnd[1], size, "isEnd");
    }
};


class queue {
    int s = 0, t = 0, d[N]{};
public:
    inline bool empty() const {return t == s;}
    inline void push(int u) {d[t++] = u;}
    inline int pop() {return d[s++];}
    inline void print() {
        printf("queue: [");
        for(int i=s; i<t; ++i) printf("%d, ", d[i]);
        printf("\b\b]\n");
        }
};


/**
 * AC 自动机
 * source: 《算法竞赛入门经典训练指南》，刘汝佳，陈锋，清华大学出版社，3.3.3节，214页
 */
int last[N], father[N];   // todo: f 是什么呢

/**
 * 处理a_1...a_k到a_{k+1}失配的关键在于，使用bfs进行层次遍历，
 * 这样能够保证每个字符失配时能够回溯到之前的地方
 * @return
 */
int getFail() {
    queue Q;
    father[0] = 0;
    for(int ch=0; ch < DOMAIN_SIZE; ++ch)    // 把第一层的结点都加入队列，加入了【4 号 h 结点】和【1 号 s 结点】
    {
        int id =  nodes[0][ch];
        if(!id) continue;
        father[id] = last[id] = 0;
        Q.push(id);
    }

    while (!Q.empty()) {
        int cur = Q.pop();
        printf("\n>> front: %d, ", cur); Q.print();

        for(int ch=0; ch < DOMAIN_SIZE; ++ch) {
            int nxt = nodes[cur][ch];
            if(!nxt) {  // 当前结点的下一个结点失配时，将跳回哪一步，答案是基于father数组
                nodes[cur][ch] = nodes[father[cur]][ch];
                continue;
            }

            Q.push(nxt);
            int pre = father[cur];
            printf("<%d, %d> ch: %c, pre: %d, ", cur, nxt, 'a'+ch, pre);
            // 如果pre不是0，但是，和当前字符ch不匹配，则不是合格的前缀；
            // 因此，这种情况下，fa将持续往上回溯，直到退出或者完全匹配
            while (pre && !nodes[pre][ch]){
                printf("%d -> %d, ", pre, father[pre]);
                pre = father[pre];
            }
            father[nxt] = nodes[pre][ch];
            last[nxt] = isEnd[father[nxt]] ? father[nxt] : last[father[nxt]];
            printf("\n");
            PrintId(9);
            PrintArr(&father[1], 9, "father");
            PrintArr(&last[1], 9, "last");
        }
    }
}

void update(int j) {
    if(j && !vis[j]) {
        ans += isEnd[j];
        vis[j] = true;
        update(last[j]);
    }
}

void find_T(char * T) {
    for(int i=0, j=0; i < strlen(T); ++i) {
        j = nodes[j][encode(T[i])];
        if(isEnd[j])
            update(j);
        else if(last[j])
            update(last[j]);
    }
}


char text[1000000 + 1000];

void solveEachCase() {
    scanf("%d", &n);
    Trie trie(n);
    ans = 0;

    // 生成next数组
    getFail();

    scanf("%s", text);
    printf("\ntext: %s, length: %ld\n", text, strlen(text));

    find_T(text);
    cout << ans << endl;

    int sAns;
    cin >> sAns;
    cout << "\nsAns: " << sAns;
}

int main () {
    freopen("/Users/mark/MarkLearningCPP/problemsets/HDOJ/2222. Keywords Search/case1.txt", "r", stdin);

    int T;
    cin >> T;
    while (T--) solveEachCase();
}










